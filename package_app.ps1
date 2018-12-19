New-Item "TempPackage" -ItemType "directory"
Copy-Item -Path ".\*js" -Destination "TempPackage"
Copy-Item -Path ".\*json" -Destination "TempPackage"
Copy-Item "node_modules" -Destination "TempPackage" -Recurse

Compress-Archive "TempPackage\*" -CompressionLevel Optimal -DestinationPath "package.zip"

Remove-Item "TempPackage\" -Force -Recurse