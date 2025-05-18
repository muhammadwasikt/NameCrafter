
const DummyNames = () => {

    return (
        <div className="flex flex-col items-center justify-center py-14 text-center">
            <svg
                width="200"
                height="200"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M12 2L13.09 8.26L18 8.27L14 11.14L15.18 17.02L12 13.77L8.82 17.02L10 11.14L6 8.27L10.91 8.26L12 2Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            <h2 className="text-3xl font-bold text-orange-400 mt-4">Choose a category</h2>
            <p className="text-pink-500 mt-2 text-lg">Select one of the categories above to view name suggestions.</p>
        </div>
    )
}

export default DummyNames
