const  constants =
{
    NUMBER :  "number",
    STRING : "string",
    BOOLEAN : "boolean",
    DATE : "date"
}

const {NUMBER, STRING , BOOLEAN, DATE} = constants;

const inputObjArr=
[
    {
        key : "ISBN",
        type : NUMBER,
        id : "ISBNId"
    },
    {
        key : "Book Name",
        type : STRING,
        id : "BookNameId"
    },

    {
        key : "Author's Name",
        type : STRING,
        id : "AuthorNameId" 
    },
    
    {
        key : "Pages",
        type : STRING,
        id : "pageId"
    },

    {
        key : "Price",
        type : NUMBER,
        id : "priceId"
    },


    {
        key : "Discount",
        type : NUMBER,
        id : "DiscountId" 
    },

    {
        key : "Date of Publish",
        type : DATE,
        id  : "DateOfPublishId"
    },

    {
        key : "In Stock",
        type : BOOLEAN,
        id : "inStockId"
    }
];