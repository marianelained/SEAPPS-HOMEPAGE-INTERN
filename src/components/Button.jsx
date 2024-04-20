
export function Button( {onClick , buttonName} ) {

    return (

        <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700" onClick={onClick} >
                {buttonName}
        </button>

    )

}