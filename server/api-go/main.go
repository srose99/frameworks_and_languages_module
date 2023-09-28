package main

import (
	"net/http"
	"github.com/gin-gonic/gin"
)

type testdata struct {
    ID     string  `json:"id"`
    Title  string  `json:"title"`
    Name   string  `json:"name"`
    Price  float64 `json:"price"`
}

var testdatasets = []testdata{
	{ID: "1", Title: "Mr", Name: "Testing1", Price: 55.99},
	{ID: "2", Title: "Mrs", Name: "Testing2", Price: 56.99},
	{ID: "3", Title: "Sir", Name: "Testing3", Price: 57.99},
}

func main() {
	router := gin.Default()
	router.GET("/testdatasets", getTestData)

	router.Run("localhost:8080")
}

func getTestData(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, testdatasets)
}