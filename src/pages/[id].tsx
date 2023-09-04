import Image from 'next/image'
import "@/assets/css/pages/_detail.scss";
import "@/assets/css/_base.scss";
import Layout from "@/app/layout";
import Link from 'next/link'
import { wrapper } from "@/store/store"
import useDetailDataController from "@/hooks/useDetailDataController";
import { formatCurrency } from "@/utils/string";

const Detail = () => {
    const { thumbnailUrl, name, price } =  useDetailDataController();

  return (
    <Layout>
        <Link href="/">Back to Cart</Link>
        <main className="detail">
            <div className="detail_thumbnail">
                <img
                    src={thumbnailUrl}
                    alt="good-image"
                    loading="lazy"
                />
            </div>

            <div className="detail_description">
                <div className="detail_description__item-name">
                    { name }
                </div>
                <div className="detail_description__price">
                    Price : Rp { formatCurrency(price) }
                </div>
            </div>
        </main>
    </Layout>
  )
}

export default wrapper.withRedux(Detail);