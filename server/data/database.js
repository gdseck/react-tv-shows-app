const data = [
  {
    id: 1,
    title: 'Black Adder',
    year: '1985',
    creators: ['Richard Curtis', 'Rowin Atkinson', 'Ben Elton']
  },
  {
    id: 2,
    title: 'Black Books',
    year: '2000',
    creators: ['Dylan Moran']
  },
  {
    id: 3,
    title: 'Extras',
    year: '2005',
    creators: ['Ricky Gervais', 'Stephen Merchant']
  },
  {
    id: 4,
    title: 'Westworld',
    year: '2016',
    creators: ['Jonathan Nolan', 'Lisa Joy']
  },
  {
    id: 5,
    title: 'Breaking Bad',
    year: '2008',
    creators: ['Vince Gilligan']
  },
  {
    id: 6,
    title: 'Sherlock',
    year: '2010',
    creators: ['Mark Gatiss', 'Steven Moffat', 'Stephen Thompson']
  },
  {
    id: 7,
    title: 'Rick and Morty',
    year: '2013',
    creators: ['Justin Roiland', 'Dan Harmon']
  },
  {
    id: 8,
    title: 'The Wire',
    year: '2002',
    creators: ['David Simon']
  },
  {
    id: 10,
    title: 'Battlestar Galactica',
    year: '2004',
    creators: ['Ronald D. Moore']
  },
  {
    id: 11,
    title: 'The IT Crowd',
    year: '2006',
    creators: ['Graham Linehan']
  },
  {
    id: 12,
    title: 'Peep Show',
    year: '2003',
    creators: ['Andrew O`Connor', 'Jesse Armstrong', 'Sam Bain']
  },
  {
    id: 13,
    title: 'Screenwipe',
    year: '2006',
    creators: ['Charlie Brooker']
  },
  {
    id: 14,
    title: 'The Ricky Gervais Show',
    year: '2010',
    creators: ['Ricky Gervais', 'Stephen Merchant', 'Karl Pilkington']
  },
  {
    id: 15,
    title: 'A Touch of Cloth',
    year: '2012',
    creators: ['Charlie Brooker', 'Boris Starling', 'Daniel Maier']
  },
  {
    id: 16,
    title: 'Inside No. 9',
    year: '2014',
    creators: ['Reece Shearsmith', 'Steve Pemberton']
  },
  {
    id: 17,
    title: 'Green Wing',
    year: '2004',
    creators: ['Victoria Pile']
  },
  {
    id: 18,
    title: 'Review',
    year: '2014',
    creators: ['Andy Daly', 'Charlie Siskel']
  },
  {
    id: 19,
    title: 'Coupling',
    year: '2000',
    creators: ['Steven Moffat']
  },
  {
    id: 20,
    title: 'The Thick of It',
    year: '2005',
    creators: ['Armando Iannuci', 'Jesse Armstrong']
  },
  {
    id: 21,
    title: 'Wilfred',
    year: '2011',
    creators: ['Jason Gann', 'Adam Zwar']
  },
  {
    id: 22,
    title: 'Monty Python`s Flying Circus',
    year: '1969',
    creators: ['Graham Chapman', 'John Cleese', 'Terry Gilliam', 'Eric Idle', 'Terry Jones', 'Michael Palin']
  },
  {
    id: 23,
    title: 'Outnumbered',
    year: '2007',
    creators: ['Andy Hamilton', 'Guy Jenkins']
  },
  {
    id: 24,
    title: 'Black Mirror',
    year: '2011',
    creators: ['Charlie Brooker']
  },
  {
    id: 25,
    title: 'Game of Thrones',
    year: '2011',
    creators: ['David Benioff', 'D.B. Weiss']
  },
  {
    id: 26,
    title: 'Narcos',
    year: '2015',
    creators: ['Chris Brancato', 'Carlo Bernard', 'Doug Miro']
  },
  {
    id: 27,
    title: 'House of Cards',
    year: '2013',
    creators: ['Beau Willimon']
  },
  {
    id: 28,
    title: 'Homeland',
    year: '2011',
    creators: ['Howard Gordon', 'Alex Gansa']
  },
  {
    id: 29,
    title: 'Sons of Anarchy',
    year: '2008',
    creators: ['Kurt Sutter']
  },
  {
    id: 31,
    title: 'Orange Is the New Black',
    year: '2013',
    creators: ['Jenji Kohan']
  },
  {
    id: 32,
    title: 'Peaky Blinders',
    year: '2013',
    creators: ['Steven Knight']
  },
  {
    id: 33,
    title: 'Fargo',
    year: '2014',
    creators: ['Noah Hawley']
  },
  {
    id: 34,
    title: 'Spartacus',
    year: '2010',
    creators: ['Steven S. DeKnight']
  },
  {
    id: 35,
    title: 'It`s Always Sunny in Philadelphia',
    year: '2005',
    creators: ['Rob McElhenney', 'Glenn Howerton']
  },
  {
    id: 36,
    title: 'Firefly',
    year: '2002',
    creators: ['Josh Whedon']
  },
  {
    id: 37,
    title: 'Mad Men',
    year: '2007',
    creators: ['Matthew Weiner']
  },
  {
    id: 38,
    title: 'Band of Brothers',
    year: '2001',
    creators: ['Erik Jendresen', 'Tom Hanks', 'John Orloff', 'E. Max Frye', 'Graham Yost', 'Bruce C. McKenna', 'Erik Bork']
  },
  {
    id: 39,
    title: 'Masters of Sex',
    year: '2013',
    creators: ['Michelle Ashford']
  },
  {
    id: 40,
    title: 'Arrested Development',
    year: '2003',
    creators: ['Mitchell Hurwitz']
  },
  {
    id: 41,
    title: 'The Americans',
    year: '2013',
    creators: ['Joe Weisberg']
  },
  {
    id: 42,
    title: 'Sense8',
    year: '2015',
    creators: ['Lana Wachowski', 'Lily Wachowski', 'J. Michael Straczynski']
  },
  {
    id: 43,
    title: 'Orphan Black',
    year: '2013',
    creators: ['Graeme Manson', 'John Fawcett']
  },
  {
    id: 44,
    title: 'Twin Peaks',
    year: '1990',
    creators: ['Mark Frost', 'David Lynch']
  },
  {
    id: 45,
    title: '11.22.63',
    year: '2016',
    creators: ['Bridget Carpenter']
  },
  {
    id: 46,
    title: 'Boardwalk Empire',
    year: '2010',
    creators: ['Terence Winter']
  },
  {
    id: 47,
    title: 'Skins',
    year: '2007',
    creators: ['Bryan Elsley', 'Jamie Brittain']
  },
  {
    id: 48,
    title: 'Fawlty Towers',
    year: '1975',
    creators: ['John Cleese', 'Connie Booth']
  },
  {
    id: 49,
    title: 'Deadwood',
    year: '2004',
    creators: ['David Milch']
  },
  {
    id: 50,
    title: 'Fringe',
    year: '2008',
    creators: ['J.J. Abrams', 'Alex Kurtzman', 'Roberto Orci']
  },
  {
    id: 51,
    title: 'Avatar: The Last Airbender',
    year: '2005',
    creators: ['Michael Dante DiMartino', 'Bryan Konietzko']
  },
  {
    id: 52,
    title: 'The Newsroom',
    year: '2012',
    creators: ['Aaron Sorkin']
  },
  {
    id: 53,
    title: 'The Bridge',
    year: '2011',
    creators: ['Hans Rosenfeldt']
  },
  {
    id: 54,
    title: 'Misfits',
    year: '2009',
    creators: ['Howard Overman', 'Jon Brown', 'Mike O`Leary']
  },
  {
    id: 55,
    title: 'The Pacific',
    year: '2010',
    creators: ['Bruce C. McKenna', 'Robert Schenkkan', 'Graham Yost', 'George Pelecanos', 'Larry Andries', 'Michelle Ashford']
  },
  {
    id: 56,
    title: 'Attack on Titan',
    year: '2013',
    creators: ['Yasuko Kobayashi']
  },
  {
    id: 57,
    title: 'Louie',
    year: '2010',
    creators: ['Louis C.K.']
  },
  {
    id: 58,
    title: 'The Office',
    year: '2001',
    creators: ['Greg Daniels']
  },
  {
    id: 59,
    title: 'The Inbetweeners',
    year: '2008',
    creators: ['Damon Beesley', 'Iain Morris']
  },
  {
    id: 60,
    title: 'Being Human',
    year: '2008',
    creators: ['Toby Whithouse']
  },
  {
    id: 61,
    title: 'Utopia',
    year: '2013',
    creators: ['Dennis Kelly', 'John Donnely']
  },
  {
    id: 62,
    title: 'Southland',
    year: '2009',
    creators: ['Ann Biderman']
  },
  {
    id: 63,
    title: 'Little Britain USA',
    year: '2008',
    creators: ['Ben Silverman', 'David Walliams', 'Matt Lucas', 'Simon Fuller']
  },
  {
    id: 64,
    title: 'The Job Lot',
    year: '2013',
    creators: ['Claire Downnes', 'Stuart Lane', 'Ian Jarvis']
  },
  {
    id: 65,
    title: 'The Life & Times of Tim',
    year: '2008',
    creators: ['Steve Dildarian']
  },
  {
    id: 66,
    title: 'Ambassadors',
    year: '2013',
    creators: ['James Wood', 'Rupert Walters']
  },
  {
    id: 67,
    title: 'Uncle',
    year: '2012',
    creators: ['Oliver Refson', 'Lilah Vandenburgh']
  },
  {
    id: 68,
    title: 'Siblings',
    year: '2014',
    creators: ['Keith Akushie']
  },
  {
    id: 69,
    title: 'Rev',
    year: '2010',
    creators: ['Tom Hollander', 'James Wood']
  },
  {
    id: 70,
    title: 'Come Fly With Me',
    year: '2010',
    creators: ['Matt Lucas', 'David Walliams']
  },
  {
    id: 71,
    title: 'Het Eiland',
    year: '2004',
    creators: ['Jan Eelen', 'Olivier Goris', 'Bart Matthys']
  },
  {
    id: 72,
    title: '8 Out of 10 Cats',
    year: '2005',
    creators: []
  },
  {
    id: 73,
    title: 'Summer Heights High',
    year: '2007',
    creators: ['Chris Lilley']
  },
  {
    id: 74,
    title: 'Garth Marenghi`s Darkplace',
    year: '2004',
    creators: ['Richard Ayoade', 'Matthew Holness']
  },
  {
    id: 75,
    title: 'Mock The Week',
    year: '2005',
    creators: ['Dan Patterson', 'Mark Leveson']
  },
  {
    id: 76,
    title: 'How Not To Live Your Life',
    year: '2007',
    creators: ['Dan Clark']
  },
  {
    id: 77,
    title: 'The Thin Blue Line',
    year: '1995',
    creators: ['Ben Elton']
  },
  {
    id: 78,
    title: 'Would I Lie To You?',
    year: '2007',
    creators: []
  },
  {
    id: 79,
    title: 'That Mitchell and Webb Look',
    year: '2006',
    creators: ['David Mitchell', 'Robert Webb', 'James Bachman', 'Mark Evans', 'Jesse Armstrong', 'Sam Bain']
  },
  {
    id: 80,
    title: 'Life On Mars',
    year: '2006',
    creators: ['Matthew Graham', 'Tony Jordan', 'Ashley Pharoah']
  },
  {
    id: 81,
    title: 'The Wrong Mans',
    year: '2013',
    creators: ['James Corden', 'Matthew Baynton']
  },
  {
    id: 82,
    title: 'Hello Ladies',
    year: '2013',
    creators: ['Stephen Merchant', 'Lee Eisenberg', 'Gene Stupnitsky']
  },
  {
    id: 83,
    title: 'Little Britain',
    year: '2003',
    creators: ['David Walliams', 'Matt Lucas']
  },
  {
    id: 84,
    title: 'Him & Her',
    year: '2010',
    creators: ['Stefan Golaszewski']
  },
  {
    id: 85,
    title: 'The League of Gentlemen',
    year: '1999',
    creators: ['Jeremy Dyson', 'Mark Gatiss', 'Steve Pemberton', 'Reece Shearsmith']
  },
  {
    id: 86,
    title: 'Life`s Too Short',
    year: '2011',
    creators: ['Warwick Davis', 'Ricky Gervais', 'Stephen Merchant']
  },
  {
    id: 87,
    title: 'Greek',
    year: '2007',
    creators: ['Patrick Sean Smith']
  },
  {
    id: 88,
    title: 'QI',
    year: '2003',
    creators: ['John Lloyd']
  },
  {
    id: 89,
    title: 'Spaced',
    year: '1999',
    creators: ['Simon Pegg', 'Jessica Stevenson', 'Edgar Wright']
  },
  {
    id: 90,
    title: 'Charlie Brooker`s Weekly Wipe',
    year: '2013',
    creators: ['Charlie Brooker']
  },
  {
    id: 91,
    title: 'Not Going Out',
    year: '2006',
    creators: ['Lee Mack', 'Andrew Collins', 'Daniel Peak']
  },
  {
    id: 92,
    title: 'Derek',
    year: '2012',
    creators: ['Ricky Gervais']
  },
  {
    id: 93,
    title: 'In de Gloria',
    year: '2000',
    creators: ['Jan Eelen']
  },
  {
    id: 94,
    title: 'How TV Ruined Your Life',
    year: '2011',
    creators: ['Charlie Brooker']
  },
  {
    id: 95,
    title: 'Newswipe',
    year: '2009',
    creators: ['Charlie Brooker']
  },
  {
    id: 96,
    title: 'Het Geslacht De Pauw',
    year: '2004',
    creators: ['Bart De Pauw']
  },
  {
    id: 97,
    title: 'Worst Week of My Life',
    year: '2006',
    creators: ['Mark Bussell', 'Justin Sbresni']
  },
  {
    id: 98,
    title: 'The Walking Dead',
    year: '2010',
    creators: ['Frank Darabont']
  },
  {
    id: 99,
    title: 'Shameless',
    year: '2011',
    creators: ['Paul Abbot', 'John Wells']
  },
  {
    id: 100,
    title: 'Modern Family',
    year: '2009',
    creators: ['Christopher Lloyd', 'Steven Levitan']
  },
  {
    id: 101,
    title: 'The Office US',
    year: '2005',
    creators: ['Greg Daniels']
  },
  {
    id: 102,
    title: 'South Park',
    year: '1997',
    creators: ['Trey Parker', 'Matt Stone']
  },
  {
    id: 103,
    title: 'Dexter',
    year: '2006',
    creators: ['James Manos']
  },
  {
    id: 104,
    title: 'Downton Abbey',
    year: '2010',
    creators: ['Julian Fellowes', 'Shelagh Stephenson', 'Tina Pepler']
  },
  {
    id: 105,
    title: 'True Detective',
    year: '2014',
    creators: ['Nic Pizzolato']
  },
  {
    id: 106,
    title: 'Parks and Recreation',
    year: '2009',
    creators: ['Greg Daniels', 'Michael Schur']
  },
  {
    id: 107,
    title: 'The Night Of',
    year: '2016',
    creators: ['Richard Price', 'Steven Zaillian']
  },
  {
    id: 108,
    title: 'Better Call Saul',
    year: '2015',
    creators: ['Vince Gilligan', 'Peter Gould']
  },
  {
    id: 109,
    title: 'Archer',
    year: '2009',
    creators: ['Adam Reed']
  },
  {
    id: 110,
    title: 'Hannibal',
    year: '2013',
    creators: ['Bryan Fuller']
  },
  {
    id: 111,
    title: 'Atlanta',
    year: '2016',
    creators: ['Donald Glover']
  },
  {
    id: 112,
    title: 'Freaks and Geeks',
    year: '1999',
    creators: ['Paul Feig']
  },
  {
    id: 113,
    title: 'Community',
    year: '2009',
    creators: ['Dan Harmon']
  },
  {
    id: 114,
    title: 'The Killing',
    year: '2011',
    creators: ['Veena Sud']
  },
  {
    id: 115,
    title: 'Banshee',
    year: '2013',
    creators: ['Jonathan Tropper', 'David Schickler']
  }
]

class Series {}
class SeriesList {}

let seriesList = new SeriesList()
seriesList.id = 1

module.exports = {
  getSeries: (searchTerm) => filteredResults(searchTerm),
  getSeriesList: () => seriesList,
  Series,
  SeriesList
}

const filteredResults = (searchTerm) => {
  if (!searchTerm) return data.slice(5)

  return data.filter(item => {
    return (
      item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
      item.year.indexOf(searchTerm) !== -1 ||
      item.creators.filter(creator =>
        creator.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1).length > 0
    )
  })
}

// export const creators = () => {
//   let creators = []
//   series.forEach(series => {
//     creators = creators.concat(series.creators)
//   })
//   creators = creators.filter((element, index, array) => array.indexOf(element) === index)
//   creators = creators.map(creator => ({id: uuid.v4(), name: creator}))
//   series.forEach(series => {
//     series.creators.forEach(creator => {
//       let index = creators.findIndex((element) => element.name === creator)
//       if (!creators[index].series) {
//         creators[index].series = [series.title]
//         return
//       }
//       creators[index].series = creators[index].series.concat(series.title)
//     })
//   })
//   return creators
// }
