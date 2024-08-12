import axios from "axios";

const SUBGRAPH_URL =
    'https://api.goldsky.com/api/public/project_clzlhe4wa49rx01y7aowg4xpb/subgraphs/music-subgraph-sepolia/v1/gn'

const GET_TRANSFER_SINGLES = `
query MyQuery {
  transferSingles {
    block_number
    contractId_
    from
    id
    idParam
    operator
    timestamp_
    to
    value
    transactionHash_
  }
}
  `

// testing subgraph query
async function main() {
    try {
        const res = await axios.post(SUBGRAPH_URL, {query: GET_TRANSFER_SINGLES});
        console.log('Response: ', res.data.data.transferSingles);
    } catch (e) {
        console.log('Querying error: ', e);
    }
}

main();