import { useControllableState } from "@chakra-ui/react";
import { Select, Box } from "@chakra-ui/react";
import useSWR from "swr";
import { useState, useEffect, React } from "react";
import Stat from "../stat";

const fetcher = (...args) => fetch(...args).then((res) => res.json())
function StatBlock(props) {
    const { data, error } = useSWR('/api/computekgs', fetcher)
    const { stat, err } = useSWR('/api/price', fetcher)
    if (!data && !stat) return <div>Loading...</div>
    let stats = data[0];
   let balance;
   let currenttank;
   let tanka
   let tankb
   let opening
    if(props.branch == undefined) {
        console.log('Yes')
        currenttank = 3333;
    } else {
        currenttank = props.branch.currenttank
        tanka = props.branch.tanks.tanka
        tankb = props.branch.tanks.tankb
        opening = props.branch.opening

    }

    

    //console.log(stats.kgsold)
    console.log(currenttank);

    

let branch;
   
   
        return (
            <Box display="flex" direction="column" className='stats'>
            <Stat type="Balance Stock" statvalue={currenttank == 'Tank B' ? tankb: tanka} suffix="Kg" />
            <Stat type="Kg Sold" statvalue={stats == undefined ? '': stats.kgsold} suffix="Kg" />
            <Stat type="Opening Stock" statvalue={opening} suffix="Kg" />
            <Stat type="Sales Count" statvalue={stats == undefined ? '': stats.count} />
        </Box>
          
        )

  }

  export default StatBlock