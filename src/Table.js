import { data } from './Mockdata';
import { useEffect, useState } from 'react';
// import SwitchRightIcon from "@mui/icons-material/SwitchRightIcon";
import SearchIcon from '@mui/icons-material/Search';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';
import { globalFilter } from "./globalFilter";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Filter } from './Filter';
import { SearchBycol } from './SearchBycol';
import { ColumnMenu } from './ColumnMenu';
import { sort } from './sort';
import SwitchRightIcon from '@mui/icons-material/SwitchRight';
export function Table() {
    let thead = ["id", "first_name", "last_name", "email", "gender", "amount"]
    let [page, setpage] = useState(2);
    let [dropdown, setdropdown] = useState(false);
    let [mode, setmode] = useState(1)
    let [filter, setfilter] = useState(false);
    let [search, setsearch] = useState("")

    let [col, setcol] = useState("")

    let [tableInfo2, settableInfo] = useState(data);

    let [global, setglobal] = useState("");
    useEffect(() => {
        if (search) {
            // console.log(se);
            let res = SearchBycol(col, search, data)
            settableInfo([...res])

        } else {
            settableInfo([...data])

        }


    }, [search])



    useEffect(() => {
        if (global) {
            let res = globalFilter(global, data);
            settableInfo(res);

        } else {
            settableInfo(data);
        }
    }, [global]);
    function Sorting(order, col) {
        let res = sort(col, order, [...tableInfo2.length <= 10 ? tableInfo2 : tableInfo2.slice(page * 10 - 10, page * 10)]);
        settableInfo([...res])
    }

    function gendrFilter(gender) {
        let res = genFilter(gender, data);
        settableInfo([...res])
    }
    return (
        <div className='app-table'>

            <div className="app_table_switchs">
                <div className="drop_down">
                    <p><span>{mode == 1 ? "Table 1" : "Table 2"}</span><KeyboardArrowLeftIcon onClick={() => setdropdown(!dropdown)} className="app_table_switchs-icons" /></p>
                    {dropdown ? <div className="drop_down_menus">
                        {mode == 1 ? <p onClick={() => {
                            setmode(2)
                            setdropdown(!dropdown)
                            setpage(1)

                        }}>Table 2</p>
                            : <p onClick={() => {
                                setmode(1)
                                setdropdown(!dropdown)
                            }}>Table 1</p>}
                    </div> : null}

                </div>
                <div className="app_table_searchbar">
                    {
                        mode == 1 ? <div className="app_table_searchbar-input">
                            <input type="text" value={global} placeholder='search' onChange={(e) => setglobal(e.target.value)} />
                            <SearchIcon className="search-icon" />
                        </div> : <>
                            <div className="app_table_searchbar-filter">
                                <Button onClick={() => setfilter(!filter)}> Filter<FilterAltIcon className="filter-icons" /></Button>
                                {
                                    filter ? <Filter setfilter={setfilter} genderfilter={gendrFilter} sorting={Sorting} setcolu={setcol} colu={col} /> : null
                                }

                            </div>
                            <Button variant='contained' onClick={() => {
                                settableInfo(data);
                                setpage(1);

                            }}>Refresh</Button></>
                    }


                </div>
            </div>
            <table class="table  table-hover table-bordered">
                <thead class="thead-dark">
                    <tr>

                        {thead.map(val => (
                            <th scope="col">{val} <SwitchRightIcon onClick={() => setcol(col ? "" : val)} className="filter-icon" />{col == val ? <ColumnMenu search={search} sorting={Sorting} setcol={setcol} col={col} setsearch={setsearch} /> : null} </th>

                        ))}

                    </tr>
                </thead>
                <tbody>

                    {[...tableInfo2.length <= 10 ? tableInfo2 : tableInfo2.slice(page * 10 - 10, page * 10)].map((val) => {
                        let style = {
                            color: "#3dacba"
                        };
                        return (
                            <tr scope="row">
                                <td style={val.amount.toString() == global ? style : null}>{val.id}</td>
                                <td style={val.first_name.toLowerCase() == global ? style : null}>{val.first_name}</td>
                                <td style={val.last_name.toLowerCase() == global ? style : null}>{val.last_name}</td>
                                <td style={val.email.toLowerCase() == global ? style : null}>{val.email}</td>
                                <td style={val.gender.toLowerCase() == global ? style : null}>{val.gender}</td>
                                <td style={val.amount.toString() == global ? style : null}>{val.amount}</td>



                            </tr>
                        );
                    })}
                </tbody>
            </table>

            {
                mode == 1 && tableInfo2.length > 10 ? <div className="app_table_pagination">
                    <IconButton onClick={() => setpage(page - 1)} aria-label="Example">
                        <KeyboardDoubleArrowLeftIcon />
                    </IconButton>
                    <Pagination length={tableInfo2.length} page={page} setpage={setpage} />
                    <IconButton onClick={() => setpage(page + 1)} aria-label="Example">
                        <KeyboardDoubleArrowRightIcon />

                    </IconButton>
                </div> : null
            }

        </div>
    );
}
function Pagination({ length, page, setpage }) {

    let nums = []
    for (let i = 1; i < Math.floor(length / 10); i++) {
        nums.push(i)
    }

    return (
        <>
            {nums.map(val => (
                <>
                    <span onClick={() => setpage(val)} className={page == val ? "app_table_pagination-selected" : 'app_table_pagination-num'}>{val}</span>



                </>
            ))}
        </>
    )
}


function genFilter(gender, data) {
    console.log(gender, data);
    let arr = [];

    for (let i = 0; i < data.length; i++) {
        if (data[i].gender.toLowerCase() == gender) {
            arr.push(data[i])
        }
    }
    console.log(arr);
    return arr
}
