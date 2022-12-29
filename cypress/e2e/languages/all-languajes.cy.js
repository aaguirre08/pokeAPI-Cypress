
describe('Get all languages', () => {

    const names = [
        {
            name: 'ja-Hrkt'
        },
        {
            name: 'roomaji'
        },
        {
            name: 'ko'
        },
        {       
            name: 'zh-Hant'
        },
        {
            name: 'fr'
        },
        {
            name: 'de'
        },
        {
            name: 'es'
        },
        {
            name: 'it'
        },
        {
            name: 'en'
        },
        {
            name: 'cs'
        },
        {
            name: 'ja'
        },
        {
            name: 'zh-Hans'
        },
        {
            name: 'pt-BR'
        },
    ]

    it('Geting languages', () => {
        cy.api({
            url: '/language'
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('count', 13)
            expect(response.body.results).to.have.length(13)

            var dataList = response.body.results
            dataList.forEach((responseData, index) => {
                const name = names[index];
                expect(responseData.name).to.eq(name.name)
              });
        })
    });

});