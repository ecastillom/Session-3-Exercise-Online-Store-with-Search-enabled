var Items=[
    {
        ItemCode: "ZY3267Q92C",
        ItemTittle: "Motorola One Vision",
        ItemPrice: "3500",
        ItemDescription: "Moto One Vision Cellphone",
        ItemCategory: "Cellphone",
        ItemImage: "Image/OneVision.jpg",
    },
    {
        ItemCode: "SM-A705MN",
        ItemTittle: "Samsung Galaxy A70",
        ItemPrice: "3500",
        ItemDescription: "Samsung Galaxy A70 Cellphone",
        ItemCategory: "Cellphone",
        ItemImage: "Image/GalaxyA70.jpg",
    },
    {
        ItemCode: "A2221",
        ItemTittle: "iPhone 11",
        ItemPrice: "3500",
        ItemDescription: "iPhone 11 A2221 Cellphone",
        ItemCategory: "Cellphone",
        ItemImage: "Image/iPhone11.jpg",
    },
    {
        ItemCode: "M1908C3JH",
        ItemTittle: "Xiaomi Redmi Note 8",
        ItemPrice: "3500",
        ItemDescription: "Xiaomi Redmi Note 8 M1908C3JH Cellphone",
        ItemCategory: "Cellphone",
        ItemImage: "Image/RedmiNote8.jpg",
    }
];

function displayCatalog(){

    for(var x=0; x<Items.length; x++){
        var Product = Items[x];

        var Layout=`<div class="Item" id="${Product.ItemCode}">
            <img src="${Product.ItemImage}">
            <h4>${Product.ItemTittle}</h4>
            <h6>${Product.ItemPrice}</h6>
            <p>${Product.ItemDescription}</p>
            <div class="button-div">
                <button class="btn btn-primary mb-2">
                    Add to Cart
                </button>
            </div>
        </div> `;

        console.log(x,Layout);

        $("#catalog").append(Layout);
    }
}

function init(){
    console.log("Catalog Page");
    displayCatalog();
}


function Register(){
    console.log("Current Items" + Items.length );

    var ItemCode = $("#ItemCode").val();
    var ItemTittle = $("#ItemTittle").val();
    var ItemPrice = $("#ItemPrice").val();
    var ItemDescription = $("#ItemDescription").val();
    var ItemCategory = $("#ItemCategory").val();
    var ItemImage = $("#ItemImage").val();

    Items.push(
        {
            ItemCode: ItemCode,
            ItemTittle: ItemTittle,
            ItemPrice: ItemPrice,
            ItemDescription: ItemDescription,
            ItemCategory: ItemCategory,
            ItemImage: ItemImage,
        }
    );


    console.log("New Item:" + Items.length) ;

}

$("#btnRegister").on("click",function(){
    Register();
});

$("#btnSearch").on("click",function(){
    
    var txtSearchLocal = $("#txtSearch").val();

    for(var x=0; x<Items.length;x++){

        if( txtSearchLocal.toUpperCase() != Items[x].ItemTittle.toUpperCase()){
            $("#" + Items[x].ItemCode).hide();
            
        }
        else{
            $("#" + Items[x].ItemCode).show();

        }

    }

});

window.onload = init; 