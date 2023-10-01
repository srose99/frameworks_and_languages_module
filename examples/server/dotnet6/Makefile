DOCKER_IMAGE:=dotnet_test

# https://dotnet.microsoft.com/en-us/apps/aspnet/apis

run_local: Program.cs
	dotnet run
Program.cs:
	dotnet new web
dotnet:
	# Notes for installed dotnet on ubuntu linux
	wget https://packages.microsoft.com/config/ubuntu/20.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb &&\
	sudo dpkg -i packages-microsoft-prod.deb &&\
	rm packages-microsoft-prod.deb &&\
	sudo apt-get update &&\
	sudo apt-get install -y apt-transport-https &&\
	sudo apt-get update &&\
	sudo apt-get install -y dotnet-sdk-6.0 &&\
	true
clean:
	rm -rf \
		bin \
		obj \
		Pages \
		Properties \
		Controllers \
		wwwroot \
		appsettings.* \
		*.csproj \
		Program.cs \
		WeatherForecast.cs \
	true


# https://learn.microsoft.com/en-us/dotnet/architecture/microservices/net-core-net-framework-containers/official-net-docker-images
build:
	docker build --tag ${DOCKER_IMAGE} .
run_container:
	docker run -it --publish 8000:8000 ${DOCKER_IMAGE}
