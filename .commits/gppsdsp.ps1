param (
    [int]$Sleep = 120,
    [string]$Branch = "main",
    [string]$MsgType = "file",
    [string]$Msg = "",
    [string]$File = ""
)

function gitpushpublicsleepdeploysetprivate {
    param (
        [int]$Sleep = 120,
        [string]$Branch = "main",
        [string]$MsgType = "file",
        [string]$Msg = "",
        [string]$File = ""
    )
    Write-Host "--------------------------------------------------------"
    Write-Host "Pushing public sleep private changes to GitHub..." -ForegroundColor Cyan
    Write-Host "Making repository public..."
    gh repo edit --visibility public --accept-visibility-change-consequences
    git add .
    if ($null -eq $MsgType -or $MsgType -eq "") {
        $MsgType = "message"
    }
    if ($MsgType -eq "file") {
        git commit -F $File
    } else {
        $commitMessage = Read-Host "Enter commit message"
        git commit -m "$commitMessage"
    }
    git push origin $Branch
    Write-Host "Changes pushed to GitHub. Sleeping $Sleep seconds to allow deployment..."
    $sleepEnd = (Get-Date).AddSeconds($Sleep)
    while ((Get-Date) -lt $sleepEnd) {
        $remaining = $sleepEnd - (Get-Date)
        Write-Host -NoNewline "`rTime remaining: $([math]::Ceiling($remaining.TotalSeconds)) seconds     " -ForegroundColor DarkGray
        Start-Sleep -Milliseconds 1000
    }
    Write-Host "Finished sleeping for $Sleep seconds."
    Write-Host "Making repository private again..." -ForegroundColor Green
    gh repo edit --visibility private --accept-visibility-change-consequences
    Write-Host "--------------------------------------------------------"
}

GitPushPublicSleepDeploySetPrivate -Sleep $Sleep -Branch $Branch -MsgType $MsgType -File $File