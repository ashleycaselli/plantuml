let publishCmd = `
docker build -t "$IMAGE_NAME:\${nextRelease.version}" -t "$IMAGE_NAME:latest" .
docker push --all-tags "$IMAGE_NAME"
`
let config = require('semantic-release-preconfigured-conventional-commits');
config.plugins.push(
    [
        "@semantic-release/exec",
        {
            "publishCmd": publishCmd
        }
    ],
    "@semantic-release/github",
    "@semantic-release/git"
)
module.exports = config