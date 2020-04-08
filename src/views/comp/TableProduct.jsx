import React from 'react';



const TableProduct = () => {
    let hasil = ''
    let arrData = [
        {nama: "Darsono", pekerjaan:"Dalang"},
        {nama: "Darsini", pekerjaan:"Sinden"}
    ]
    const DataOrang = ()=>{
        
        for (let i = 0; i < arrData.length; i++) {
            hasil += i+1 + arrData[i].nama + arrData[i].pekerjaan

        }
        return hasil
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
                    <tr>
                        <td>{DataOrang()}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TableProduct;