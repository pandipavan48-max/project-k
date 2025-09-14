const ProductCart = () => {
    // border: 1px solid black;
    // width: 300px;
    // display: flex;
    //flex-direction: column;
    //align-items: center;
    //min-height: 400px;
    //padding: 20px;
    //box-sizing: border-box;
    //border-radius: 10px;
    return (
        <div className="border -1 border-black w-{90px} flex flex-col items-center gap-10 pt-4 pb-4 p-4 rounded-4xl">
            <img src="og02.jpg" alt="" className=" w:{700px} h:{700px} border-4 rounded-4xl" />
            
            <div className="flex flex-col gap-4 items-center">
                <h2 className="font-bold text -4xl text-red-500" > directed by:SUJEETH</h2>
                <p className=" font-black text-teal-600" >"OG"</p>
                <p className=" font-bold text-purple-500">ticket price:499</p>
                <button className="">Add to Cart</button>
            </div>
        </div>
    )
}
export default ProductCart