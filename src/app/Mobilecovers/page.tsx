import React from 'react'

const Mobilecovers = () =>  {

    const mobilecoversData = [
      { 
        id: 1, 
        name: 'Customize Car Mobile Back Cover', 
        price: 1500, 
        description: 'Customize Mobile Cover', 
        image: 'car 1.jpg' },
      { 
        id: 2, 
        name: 'Car Mobile Cover', 
        price: 1500, 
        description: 'Customize Mobile Back Cover', 
        image: '/car 2.jpg' },
      { 
        id: 3, 
        name: 'Black Car Customize Cover', 
        price: 1500, 
        description: 'Customize Mobile Back Cover', 
        image: '/Snapinsta.app_461250846_558789379949369_7843753814079178959_n_1080.jpg'},

      { 
        id: 4, 
        name: 'Messi Mobile Customize Cover', 
        price: 1500, 
        description: 'Customize Mobile Cover', 
        image: '/Snapinsta.app_434102224_789819249697050_1412226595108941893_n_1080.jpg' },

      {  id: 5, 
        name: 'Ronaldo Customize Mobile Back Cover', 
        price: 1500, 
        description: 'Customize Mobile Cover', 
        image: 'Snapinsta.app_434226224_1874535352969120_6118119253549464893_n_1080.jpg' },

      {  id: 6, 
        name: 'Blue Spider Customize Mobile Cover', 
        price: 1500, 
        description: 'Customize Mobile Back Cover', 
        image: '/Snapinsta.app_465244717_1639775820084324_7148190610462450196_n_1080.jpg' },

      {  id: 7, 
        name: 'Spider Customize Mobile Cover', 
        price: 1500, 
        description: 'Customize Mobile Back Cover', 
        image: '/Snapinsta.app_461825834_543463231404675_4226834328371725093_n_1080.jpg' },


      {  id: 8, 
       name: 'Red Spider Mobile Cover', 
       price: 1500, 
       description: 'Customize Mobile Back Cover', 
        image: '/Snapinsta.app_461689269_1520965418556599_7876749491104950846_n_1080.jpg' },
     

      {  id: 9, 
       name: 'Latest Spider Mobile Cover', 
       price: 1500, 
       description: 'Customize Mobile Back Cover', 
       image: '/Snapinsta.app_461715058_2811698142338760_6163884594906105597_n_1080.jpg' },

      {  id: 10, 
      name: 'Latest Red Spider Mobile Cover', 
      price: 1500, 
      description: 'Customize Mobile Back Cover', 
      image: '/Snapinsta.app_461804022_1601283027092474_4792004897888070939_n_1080.jpg' },

      {  id: 10, 
      name: 'Trendy Pattern Mobile Cover', 
      price: 1500, 
      description: 'Customize Mobile Back Cover', 
      image: '/Snapinsta.app_463655401_1727042194795818_1224668618813364222_n_1080.jpg' },

    {  id: 11, 
     name: 'Green Trendy Pattern Mobile Cover', 
     price: 1500, 
      description: 'Customize Mobile Back Cover', 
      image: '/Snapinsta.app_463476980_570558288770726_877092239830054184_n_1080.jpg' },

    {  id: 13, 
      name: 'Trendy Multi Pattern Mobile Cover', 
      price: 1500, 
      description: 'Customize Mobile Back Cover', 
      image: '/Snapinsta.app_463655408_861237752801752_6645787705154689069_n_1080.jpg' },

    {  id: 14, 
     name: 'Latest Trendy Pattern Mobile Cover', 
     price: 1500, 
     description: 'Customize Mobile Back Cover', 
     image: '/Snapinsta.app_463733338_580816767705031_3142945720029051789_n_1080.jpg' },

    {  id: 14, 
     name: 'New Colorful Pattern Mobile Cover', 
     price: 1500, 
      description: 'Customize Mobile Back Cover', 
      image: '/Snapinsta.app_463909324_862238715996315_9164758097719098132_n_1080.jpg' },
  
    ]

  return (
    <div>
      <div className='covers'>
        {mobilecoversData.map((mobile)=>(
          <div key={mobile.id} className='cover-card'>
            <img src={mobile.image} alt={mobile.name} />
            <h3>{mobile.name}</h3>
            <p>{mobile.description}</p>
            <div className='price'> Rs:{mobile.price}/-</div>
            <button>Add to Cart</button>
            </div>
        ))}
      </div>

    </div>
  )
}

export default Mobilecovers
