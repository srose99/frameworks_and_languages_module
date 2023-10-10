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
	router.GET("/", func(c *gin.Context) {
		c.Header("Content-Type", "text/html; charset=utf-8")
		c.String(http.StatusOK, "<html><body>Hello, Welcome to my API</body></html>")
	})
	router.GET("/item", getTestData)
	router.POST("/item", postTestData)
	router.DELETE("/item/:userid", deleteTestData)

	router.Run("0.0.0.0:8000")
}

func getTestData(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, testdatasets)
}

func postTestData(c *gin.Context) {
	var userpostdataJSON struct {
		User_ID     string   `json:"userid"`
		Keywords    []string `json:"keywords"`
		Description string   `json:"description"`
		Lat         float64  `json:"lat"`
		Lon         float64  `json:"lon"`
	}

	if err := c.BindJSON(&userpostdataJSON); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	postData := testdata{
		User_ID: userpostdataJSON.User_ID,
		Keywords: Keywords{
			Tools: userpostdataJSON.Keywords,
		},
		Description: userpostdataJSON.Description,
		Lat:         userpostdataJSON.Lat,
		Lon:         userpostdataJSON.Lon,
	}

	testdatasets = append(testdatasets, postData)
	c.IndentedJSON(http.StatusCreated, postData)
}

func deleteTestData(c *gin.Context) {
	userID := c.Param("userid")

	index := -1
	for i, data := range testdatasets {
		if data.User_ID == userID {
			index = i
			break
		}
	}

	if index == -1 {
		c.JSON(http.StatusNotFound, gin.H{"error": "data not found"})
		return
	}

	testdatasets = append(testdatasets[:index], testdatasets[index+1:]...)

	c.JSON(http.StatusOK, gin.H{"message": "data selected removed successfully"})
}
