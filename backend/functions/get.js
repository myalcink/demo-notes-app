import handler from "../util/handler";
import dynamoDB from "../util/dynamodb";

export const main = handler(async(event) => {
    const params = {
        TableName: process.env.TABLE_NAME,
        Key: {
            userId: "123",
            noteId: event.pathParameters.id,
        },
    };

    const result = await dynamoDB.get(params);
    if (!result.Item) {
        throw new Error("Item not found");
    }

    // Return the retrieved item
    return result.Item;
});