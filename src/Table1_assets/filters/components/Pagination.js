export function Pagination({ length, page, setpage }) {

    let nums = [];
    for (let i = 1; i < Math.floor(length / 10); i++) {
        nums.push(i);
    }

    return (
        <>
            {nums.map(val => (
                <>
                    <span onClick={() => setpage(val)} className={page == val ? "app_table_pagination-selected" : 'app_table_pagination-num'}>{val}</span>



                </>
            ))}
        </>
    );
}
