import Image from 'next/image'

const TopBanner = () => {
  return (
    <div style={{ backgroundColor: 'red', width: '100%', marginTop: '4rem' }}>
      <Image
        src='/images/banner.png'
        width='100%'
        height='13%'
        layout='responsive'
        alt='bannerPicture'
      />
    </div>
  )
}

export default TopBanner
