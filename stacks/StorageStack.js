import { Bucket, Table } from "@serverless-stack/resources";

export function StorageStack({stack, app}) {
    // Create a DynamoDB table
    const table = new Table(stack, "Notes", {
        fields: {
            userId: "string",
            "noteId": "string",
        },
        primaryIndex: {partitionKey: "userId", sortKey: "noteId"},
    });

    // Create an S3 bucket
    const bucket = new Bucket(stack, "Uploads", {
        cors: [
            {
                maxAge: "1 day",
                allowedOrigins: ["*"],
                allowedMethods: ["GET", "PUT", "POST", "DELETE", "HEAD"],
                allowedHeaders: ["*"],
            },
        ],
    });

    return {
        table,
        bucket
    };

    

}