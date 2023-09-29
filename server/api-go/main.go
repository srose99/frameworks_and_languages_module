package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type Keywords struct {
	Tools []string `json:"Tools"`
}

type testdata struct {
	User_ID     string   `json:"userid"`
	Keywords    Keywords `json:"keywords"`
	Description string   `json:"description"`
	Lat         float64  `json:"lat"`
	Lon         float64  `json:"lon"`
}

var testdatasets = []testdata{
	{User_ID: "1", Keywords: Keywords{Tools: []string{"Hammer", "Nails"}}, Description: "A hammer and nails set", Lat: 51.2798438, Lon: 1.0830275},
}

func main() {
	router := gin.Default()
	router.GET("/testdatasets", getTestData)
	router.POST("/testdatasets", postTestData)

	router.Run("localhost:8000")
}

func getTestData(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, testdatasets)
}

func postTestData(c *gin.Context) {
	var newTestData testdata
	if err := c.BindJSON(&newTestData); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	testdatasets = append(testdatasets, newTestData)
	c.IndentedJSON(http.StatusCreated, newTestData)
}
