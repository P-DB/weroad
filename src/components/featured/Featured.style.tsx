const FeaturedStyle = {
    featured:'mt-10',
    container:'flex flex-col max-w-6xl mx-auto lg:grid lg:grid-cols-3 lg:auto-rows-fr lg:grid-rows-[min-content] lg:gap-x-12 lg:items-start',
    main:{
        container:'flex flex-col lg:col-span-2',
        title:'text-center text-4xl font-gilroy text-gray-1 lg:text-left',
        subtitle: 'text-center mb-2.5 lg:text-left',
        content:'px-3 pt-5 lg:px-0',
        text:'mb-2.5 text-gray-1',
        img:'w-full',
        button:'w-full mb-4 lg:hidden'
    },
    sidebar:{
        container:'flex flex-col rounded-xl border border-gray-5 mx-3 mt-7 mb-3 lg:mb-7 px-6 py-7 lg:row-span-2',
        title:'text-3xl font-gilroy text-gray-1 mb-6 lg:order-2',
        button:'w-full lg:order-1 lg:mb-7',
        itemContainer:'flex flex-col lg:order-3',
        item:'flex mb-6',
        icon:'w-8 mr-6',
        itemTitle:' text-gray-2 font-semibold mb-1',
        itemDescription:'block text-gray-2'
    },
    accordion:{
        container:'mx-3 lg:col-span-2 lg:mx-0',
        icon:'w-8 mr-6'
    }
}

export default FeaturedStyle;