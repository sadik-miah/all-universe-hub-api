const dataLoading = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools')
    const data = await res.json()
    // console.log(data.data.tools);
    const documents = data.data.tools;
    // console.log(documents);
    disPlayDocumentsData(documents);
}

const disPlayDocumentsData = (documents) => {
    console.log(documents);
    const cardContainer = document.getElementById('card-container');


    documents.forEach(data => {





        const card = document.createElement('div');

        card.classList = `card bg-base-100 shadow-xl`;
        card.innerHTML = `
                    <figure>
                        <img src="${data.image}"
                            alt="Shoes" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">Features</h2>
                        <ol id="ul-container" class="border-b-2 border-gray-400 pb-3">
                       <li>${data.features[0]}</li>
                       <li>${data.features[1]}</li>
                       <li>${data.features[2]}</li>
                        </ol>
                       <div class="card-actions justify-between mt-3 items-center">
                            <div>
                                <h1 class="text-xl font-semibold">${data.name}</h1>
                                <p><i class="fa-solid fa-calendar-days"></i><span class="pl-2">${data.published_in}</span></p>
                            </div>
                            <div>
                                <button onClick="showDetailsButton('${data.id}')"><i class="fa-solid fa-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
    `

        cardContainer.appendChild(card);


    });



}

const showDetailsButton = async (id) => {
    const res = await fetch(` https://openapi.programming-hero.com/api/ai/tool/${id}`)
    const data = await res.json()
    const details = data.data;
    // console.log(details);
    displayDetailsData(details);
}

const displayDetailsData = (details) => {
    details_show_modal.showModal()

}


dataLoading();