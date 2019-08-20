Write-Output "Creating deployment package..."
New-Item "TempPackage" -ItemType "directory"
Copy-Item -Path ".\*.js" -Destination "TempPackage"
Copy-Item -Path ".\*.json" -Destination "TempPackage"
Copy-Item "node_modules" -Destination "TempPackage" -Recurse

#Rename-Item "TempPackage" -NewName "TempPackage.zip"

#Remove-Item "TempPackage\" -Force -Recurse

# https://stackoverflow.com/questions/41750026/aws-lambda-error-cannot-find-module-var-task-index

# Need to figure out how to zip stuff here in a way that AWS likes.

# Powershell's Compress-Archive doesn't work
# (when you upload it, the directory strucutre is flattened.)

Write-Output "Deployment package created!"