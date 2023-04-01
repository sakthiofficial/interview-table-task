import IconButton from '@mui/material/IconButton';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from 'react';

export function Filter({ amountfilter, setfilter, genderfilter, sorting }) {
    let [sort, setsort] = useState(null)
    let [col, setcol] = useState(null)
    let [gender, setgender] = useState(null)
    let [amount, setamount] = useState(null)
    let [list, setlist] = useState([])
    let [amt, setamt] = useState(null)


    let column = ["id", "first_name", "last_name", "email", "gender", "amount"];
    let sortrow = ["a-z", "z-a"];
    let amountrow = ["less than", "greater than", "equal to"];
    let genderrow = ["male", "female"]
    function filter(list) {

        list.map(val => {

            if (val.toLowerCase() == "sort") {
                if (col && sort) {
                    console.log(col, sort);
                    setcol(col)
                    sorting(sort, col)
                }

            }
            if (gender) {


                genderfilter(gender)

            }
            if (amt) {
                amountfilter(amount, amt)

            }

        })
        setfilter(false)

    }
    return (
        <div className="filter">
            <div className="filter_list">
                {list.map((val, ind) => (
                    <p>{val}<RemoveIcon onClick={() => {
                        list.splice(0, 1)
                        setlist([...list])
                    }} /> </p>
                ))}


            </div>
            <div className="filter_options">
                <div className="option">
                    <div className="drop_down">
                        <p><span>{sort == null ? "Sort" : sort == 1 ? "a-z" : "z-a"}</span><KeyboardArrowLeftIcon onClick={() => setsort(sort == null ? "" : null)} className="option_icon" /></p>
                        {sort == "" ? <div className="drop_down_menus">
                            {sortrow.map(val => (
                                <p onClick={() => setsort(val == "a-z" ? 1 : -1)}>{val}</p>
                            ))}

                        </div> : null}

                    </div>
                    <div className="drop_down">
                        <p><span>{col ? col : "Column"}</span><KeyboardArrowLeftIcon onClick={() => setcol(col == null ? "" : null)} className="option_icon" /></p>
                        {col == "" ? <div className="drop_down_menus">
                            {column.map((val) => {
                                return (
                                    <p onClick={() => setcol(val)}>{val}</p>
                                )
                            })}

                        </div> : null}

                    </div>
                    <IconButton onClick={() => setlist([...list, "sort"])} aria-label="Example">
                        <AddIcon />
                    </IconButton>

                </div>
                <div className="option">
                    <div className="drop_down">
                        <p><span>{gender ? gender : "Gender"}</span><KeyboardArrowLeftIcon onClick={() => setgender(gender == null ? "" : null)} className="option_icon" /></p>
                        {gender == "" ? <div className="drop_down_menus">
                            {genderrow.map(val => (
                                <p onClick={() => {
                                    setgender(val)
                                }}>{val}</p>
                            ))}

                        </div> : null}

                    </div>
                    <IconButton onClick={() => setlist([...list, "gender"])} aria-label="Example">
                        <AddIcon />
                    </IconButton>
                </div>

                <div className="option">
                    <div className="drop_down">
                        <p><span>{amount ? amount : "Amount"}</span><KeyboardArrowLeftIcon onClick={() => setamount(amount == null ? "" : null)} className="option_icon" /></p>
                        {amount == "" ? <div className="drop_down_menus">
                            {amountrow.map(val => (
                                <p onClick={() => setamount(val)}>{val}</p>
                            ))}




                        </div> : null}

                    </div>
                    <input type="number" onChange={(e) => setamt(parseInt(e.target.value))} />
                    <IconButton onClick={() => setlist([...list, "amount"])} aria-label="Example">
                        <AddIcon />
                    </IconButton>

                </div>

            </div>
            <div className="filter_btn">
                <Button onClick={() => {
                    filter(list)
                }}>Done</Button>
            </div>
        </div>
    );
}
