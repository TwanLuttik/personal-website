
export interface Project {
  title: string;
  website: string;
  description: string;
  date: string;
  lang?: string[];
}

export const projects: Project[] = [
  {
    title: 'Cheapestkeys',
    website: 'https://cheapestkeys.com',
    description: 'Find you cheapest steam key for the best price',
    date: '2020 - april',
    lang: ['typescript', 'reactjs']
  },
  {
    title: 'ThruRate',
    website: 'https://thrurate.com',
    description: 'Coming soon...',
    date: '2021 - February',
    lang: ['typescript', 'reactjs']
  },
  // {
  //   title: 'minecraft Tokens Plugin (old)',
  //   website: 'https://www.spigotmc.org/resources/tokens-economy-1-8-x-1-13-x-bank-system-sql-api.53944/',
  //   description: 'You can use this as a economony plugin with a bank built in supported',
  //   date: '2018 - March',
  //   lang: ['java']
  // },
]