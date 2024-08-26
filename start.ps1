Write-Host "Starting Up Fit-today app"

# Run docker-compose up with build
Write-Host "Building and starting Docker containers..."
docker-compose up -d --build

# Check if docker-compose was successful
if ($LASTEXITCODE -eq 0) {
    Write-Host "Docker containers built and started successfully."

    # Define the paths
    $clientPath = ".\frontend"
    $serverPath = ".\backend"

    # Function to run yarn install
    function Install-YarnModules($path) {
        Set-Location $path
        Write-Host "Installing yarn modules in $path..."
        yarn install
        Set-Location ..
    }

    # Install modules for client and server
    Install-YarnModules $clientPath
    Install-YarnModules $serverPath

    # Define the npm options
    $run = "yarn dev"

    # Function to start npm in a new window
    function Start-NpmInNewWindow($path, $npmArgument) {
        $proc = Start-Process powershell -ArgumentList "-NoExit", "-Command", "Set-Location '$path'; $npmArgument" -PassThru
        return $proc.Id
    }

    # Start npm in server directory
    $server = Start-NpmInNewWindow $serverPath $run

    # Start npm in client directory
    $client = Start-NpmInNewWindow $clientPath $run

    Write-Host "Dev Backend server is running process is $($server)"
    Write-Host "Dev Frontend server is running process is $($client)"

    Start-Process "http://localhost:5173"

    # Wait for user input to keep the script running
    Write-Host "Press Enter to stop the dev servers and Docker containers..."
    $null = Read-Host

    # Stop the processes and Docker containers
    Stop-Process -Id $server
    Stop-Process -Id $client
    docker-compose down

    Write-Host "Development servers and Docker containers stopped."
} else {
    Write-Host "Failed to build or start Docker containers. Exiting."
    exit 1
}