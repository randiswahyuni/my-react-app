import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
 
const EditProduct = () => {
    const [nama, setnama] = useState('');
    const [alamat, setalamat] = useState('');
    const history = useNavigate();
    const { id } = useParams();
 
    useEffect(() => {
        getProductById();
    }, []);
 
    const getProductById = async() => {
        const response = await fetch(`http://localhost:8080/products/${id}`);
        const data = await response.json();
        setnama(data.nama);
        setalamat(data.alamat);
    }
 
    const updateProduct = async(e) => {
        e.preventDefault();
        const product = { nama, alamat };
        await fetch(`http://localhost:8080/products/${id}`,{
            method: "PUT",
            body: JSON.stringify(product),
            headers:{
                'Content-Type': 'application/json'
            }
        });
        history("/");
    }
 
    return (
        <div>
            <form onSubmit={updateProduct}>
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
                    <button className="button is-primary">Update</button>
                </div>
                </div>
            </form>
        </div>
    )
}
 
export default EditProduct