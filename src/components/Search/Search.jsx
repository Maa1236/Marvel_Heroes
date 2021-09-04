import './Search.css'

export const Search = ({setSearchTerm}) => (
    <div className="search">
        <input
            placeholder="Search..."
            type="text"
            onChange={(event) => {
                setSearchTerm(event.target.value)
            }}
        ></input>
        <button>go</button>
    </div>
)
