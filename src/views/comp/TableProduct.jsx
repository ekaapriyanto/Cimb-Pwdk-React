import React from 'react';



const TableProduct = () => {
    let hasil = ''
    let arrData = [
        {nama: "Darsono", pekerjaan:"Dalang"},
        {nama: "Darsini", pekerjaan:"Sinden"}
    ]
    const DataOrang = ()=>{
        return arrData.map((val, index) => {
            return (
                <tr>
                    <td>{index +1}</td>
                    <td>{val.nama}</td>
                    <td>{val.pekerjaan}</td>
                </tr>
            )
        })
    }
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Pekerjaan</th>
                    </tr>
                </thead>
                <tbody>
                    {DataOrang()}
                </tbody>
            </table>
        </div>
    )
}

export default TableProduct;