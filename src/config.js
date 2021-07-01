const config = {
    // s3: {
    //     REGION: "YOUR_S3_UPLOADS_BUCKET_REGION",
    //     BUCKET: "YOUR_S3_UPLOADS_BUCKET_NAME",
    // },
    // apiGateway: {
    //     REGION: "YOUR_API_GATEWAY_REGION",
    //     URL: "YOUR_API_GATEWAY_URL",
    // },
    cognito: {
        REGION: "us-east-2",
        USER_POOL_ID: "us-east-2_dwkATlhCl",
        APP_CLIENT_ID: "m27rhgp656dirku8eik0kifm0",
        // IDENTITY_POOL_ID: "YOUR_IDENTITY_POOL_ID",
    },
    app:{
        BASE_API_URL:"https://vi6c4c8bm4.execute-api.us-east-2.amazonaws.com/prod"
    }
};

export default config;
