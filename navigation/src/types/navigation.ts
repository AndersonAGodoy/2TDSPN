export type RootStackParamsList = {
  Home: undefined,
  Profile: {userId:string}
  New: undefined,
  Feed: {sort: 'asc' | 'desc'} | undefined
}