import { useState } from "react";
import { useNavigate } from "react-router-dom";
 
const AddProduct = () => {
    const [nama, setnama] = useState('');
    const [alamat, setalamat] = useState('');
    const navigate = useNavigate();
 
    const saveProduct = async(e) => {
        e.preventDefault();
        const product = { nama, alamat };
        await fetch('http://localhost:8080/products',{
            method: "POST",
            body: JSON.stringify(product),
            headers:{
                'Content-Type': 'application/json'
            }
        });
        console.log('adddd')
        navigate("/");  
    }
 
    return (
        <div>
            <form onSubmit={saveProduct}>
                <div className="field">
                <label className="label">Nama Mahasiswa</label>
                <div className="control">
                    <input className="input" value={nama} onChange={(e) => setnama(e.target.value)} type="text" placeholder="Nama" />
                </div>
                </div>
 
                <div className="field">
                <label className="label">Alamat</label>
                <div className="control">
                    <input className="input" value={alamat} onChange={(e) => setalamat(e.target.value)} type="text" placeholder="Alamat" />
                </div>
                </div>
         
                <div className="field">
                <div className="control">
                    <button className="button is-primary">Save</button>
                </div>
                </div>
            </form>
        </div>
    )
}
 
export default AddProduct