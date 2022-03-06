const FeaturedStyle = {
    featured:'mt-10',
    container:'flex flex-col max-w-6xl mx-auto',
    main:{
        container:'flex flex-col',
        title:'text-center text-4xl font-gilroy text-gray-1',
        subtitle: 'text-center mb-2.5',
        content:'px-3 pt-5',
        text:'mb-2.5 text-gray-1',
        img:'w-full',
        button:'w-full mb-4'
    },
    sidebar:{
        container:'rounded-xl border border-gray-5 mx-3 mt-7 px-6 py-7',
        title:'text-3xl font-gilroy text-gray-1 mb-6',
        button:'w-full',
        item:'flex mb-6',
        icon:'w-8 mr-6',
        itemTitle:' text-gray-2 font-semibold mb-1',
        itemDescription:'block text-gray-2'
    },
    accordion:{
        container:'mx-3',
        icon:'w-8 mr-6',
    }
}

export default FeaturedStyle;