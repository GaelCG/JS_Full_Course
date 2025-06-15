/**
 * {
 * url:...
 * bucket:... amazon S3
 * Port: 80}
 */

const config = {
    url : "https://api.example.com",
    bucket: "bucket",
    port: 80
}
function configurarAPI(url, bucket, port) {
    return `${url}/${bucket}/${port}`;
}
console.log(configurarAPI('holamundo.io','145',80));
