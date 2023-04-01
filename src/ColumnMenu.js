import { useState } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

export function ColumnMenu({ col, sorting, search, setsearch }) {
    let [sortopen, setsortopen] = useState(false);
    return (
        <div className="columnmenu">
            <div className="columnmenu_searchbar">
                <input value={search} onChange={(e) => setsearch(e.target.value)} type="text" />
            </div>
            <div className="columnmenu_sort">

                <div className="drop_down">
                    <p><span>Sort</span><KeyboardArrowLeftIcon onClick={() => setsortopen(!sortopen)} className="option_icon" /></p>
                    {sortopen ? <div className="drop_down_menus">
                        <p onClick={() => {
                            setsortopen(false)
                            sorting(1, col)
                        }}>a-z</p>
                        <p onClick={() => {
                            setsortopen(false)
                            sorting(-1, col)
                        }}>z-a</p>
                    </div> : null}

                </div>

            </div>
        </div>
    );
}
