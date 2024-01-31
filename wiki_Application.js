let searchInputEl = document.getElementById('searchInput')
let searchResultsEl = document.getElementById("searchResults")
let spinnerElement = document.getElementById('spinner')



function createAndAppend(result) {

    let {
        title,
        link,
        description
    } = result
    console.log(title)
    console.log(link)
    console.log(description)
    let resultContainer = document.createElement("div")
    resultContainer.classList.add("result-item")
    searchResultsEl.appendChild(resultContainer)
    //
    let anchorElement = document.createElement("a")
    anchorElement.textContent = title
    anchorElement.href = link
    anchorElement.target = "_blank"
    anchorElement.classList.add("result-title")
    resultContainer.appendChild(anchorElement)
    // title
    let brElement = document.createElement("br")
    resultContainer.appendChild(brElement)

    let urlELement = document.createElement("a")
    urlELement.textContent = link
    urlELement.href = link
    urlELement.target = "_blank"
    urlELement.classList.add("result-url")
    resultContainer.appendChild(urlELement)
    let urlBr = document.createElement("br")
    resultContainer.appendChild(urlBr)

    let descriptionEl = document.createElement("p")
    descriptionEl.textContent = description
    descriptionEl.classList.add("link-description")
    resultContainer.appendChild(descriptionEl)
}

function displayresults(search_results) {
    spinnerElement.classList.toggle("d-none")
    for (let result of search_results) {

        createAndAppend(result)

    }
}


function searchInput(event) {

    if (event.key === "Enter") {
        searchResultsEl.textContent = ""
        spinnerElement.classList.toggle("d-none")
        searchInputValue = searchInputEl.value


        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInputValue;
        let options = {
            method: "GET"
        }
        console.log(url)
        fetch(url, options)
            .then(function(response) {
                return response.json()
            })
            .then(function(jsonData) {
                let {
                    search_results
                } = jsonData
                displayresults(search_results)
                console.log(jsonData)
            })
    }
}
searchInputEl.addEventListener("keydown", searchInput)