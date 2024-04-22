import React from "react";
import { List } from "react-virtualized";
import 'react-virtualized/styles.css';
const list = Array(5000).fill().map((_, index) => ({
    id: index,
    name: `item ${index}`
}))
const rowRenderer = ({ index, key, style }) => {
    return (
        <div key={key} style={style}>
            {list[index].name}
        </div>
    )
}
function MyList() {
    return (
        <>
            <List
                height={300} width={300} rowCount={list.length} rowHeight={40} rowRenderer={rowRenderer} />

        </>
    )
}
export default MyList;