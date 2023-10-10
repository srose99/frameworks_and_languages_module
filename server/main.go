package main

import (
	"net/http"

	"github.com/gin-gonic/gin"

	"github.com/google/uuid"
)

type Keywords struct {
	Tools []string `json:"Tools"`
}

type testdata struct {
	ID          string   `json:"id"`
	User_ID     string   `json:"userid"`
	Keywords    Keywords `json:"keywords"`
	Description string   `json:"description"`
	Lat         float64  `json:"lat"`
	Lon         float64  `json:"lon"`
}

var testdatasets = []testdata{
	{ID: "1", User_ID: "1", Keywords: Keywords{Tools: []string{"Hammer", "Nails"}}, Description: "A hammer and nails set", Lat: 51.2798438, Lon: 1.0830275},
}

func main() {
	router := gin.Default()
	router.GET("/", func(c *gin.Context) {
		c.Header("Content-Type", "text/html; charset=utf-8")
		c.String(http.StatusOK, "<html><body>Hello, Welcome to my API</body></html>")
	})
	router.GET("/item", getTestData)
	router.GET("/item/:id", getIDData)
	router.POST("/item", postTestData)
	router.DELETE("/item/:userid", deleteTestData)

	router.Run("0.0.0.0:8000")
}

func getTestData(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, testdatasets)
}

func getIDData(c *gin.Context) {
	id := c.Param("id")

	var responseData []testdata

	for _, data := range testdatasets {
		if data.ID == id {
			responseData = append(responseData, data)
			break
		}
	}

	if len(responseData) == 0 {
		c.JSON(http.StatusNotFound, gin.H{"error": "data not found"})
		return
	}

	c.IndentedJSON(http.StatusOK, responseData)
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

	itemID := generateUUID()

	postData := testdata{
		ID:         itemID,
		User_ID:    userpostdataJSON.User_ID,
		Keywords:   Keywords{
			Tools:   userpostdataJSON.Keywords,
		},
		Description: userpostdataJSON.Description,
		Lat:         userpostdataJSON.Lat,
		Lon:         userpostdataJSON.Lon,
	}

	postData.ID = generateUUID()
	testdatasets = append(testdatasets, postData)
	c.JSON(http.StatusCreated, postData)
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

func generateUUID() string {
	id := uuid.New().String()
	return id
}
