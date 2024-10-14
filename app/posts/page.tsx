import ProdukData from "../../public/data/toko bunga.json";
import CardList from "../components/Posts/CardList";
import ViewUserButton from "../components/Posts/ViewUserButton";

interface Produk {
  IdProduk: number;
  KodeProduk: number;
  NamaProduk: string;
  HargaModal: number;
  HargaJual: number;
  HargaDiskon: number;
  Stok: number;
}

const ProdukList = () => {
    const Produks: Produk[] = ProdukData["Produk"] || [];
    
    return (
      <>
        <p>{new Date().toLocaleTimeString()}</p>
        <h1 className="text-fuchsia-500">POSTINGAN PAGE</h1>
        {Produks.map((produk) => (
          <CardList key={produk.IdProduk}>
            <p>{produk.NamaProduk}</p>
            <p>Kode Produk: {produk.KodeProduk}</p>
            <p>Harga Modal: {produk.HargaModal}</p>
            <p>Harga Jual: {produk.HargaJual}</p>
            <p>Harga Diskon: {produk.HargaDiskon}</p>
            <p>Stok: {produk.Stok}</p>
            <ViewUserButton userId={produk.IdProduk} />
          </CardList>
        ))}
      </>
    );
  };
  
  export default ProdukList;