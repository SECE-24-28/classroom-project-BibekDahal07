import React from "react";
import { TableStyle } from "./tablestyle";

const RegTable = () => {
    return(
        <div>
            <TableStyle>
            <table cellPadding="10" cellSpacing="0" border="2">
                <tr>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Roll No</th>
                </tr>
                <tr>
                    <td>Bibek</td>
                    <td>CSE</td>
                    <td>146</td>
                </tr>
                <tr>
                    <td>Niket</td>
                    <td>EEE</td>
                    <td>23</td>
                </tr>
                <tr>
                    <td>Dahal</td>
                    <td>AIML</td>
                    <td>242</td>
                </tr>
                <tr>
                    <td>Murari</td>
                    <td>IT</td>
                    <td>304</td>
                </tr>
            </table>
            </TableStyle>
        </div>
    )
}

export default RegTable;