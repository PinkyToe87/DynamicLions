import React from "react";
import { Fragment } from "react/cjs/react.production.min";

import FileList from "./FileList";
import Card from "../UI/Card";
import classes from "./Files.module.css";

import financialReport_Jan_2023 from '../../files/Financial/2023/01_2023_TEST.txt';
import financialReport_Feb_2023 from '../../files/Financial/2023/01_2023_TEST.txt';
import financialReport_Mar_2023 from '../../files/Financial/2023/01_2023_TEST.txt';
import financialReport_Apr_2023 from '../../files/Financial/2023/01_2023_TEST.txt';
import financialReport_May_2023 from '../../files/Financial/2023/01_2023_TEST.txt';
import financialReport_Jun_2023 from '../../files/Financial/2023/01_2023_TEST.txt';
import financialReport_Jul_2023 from '../../files/Financial/2023/01_2023_TEST.txt';
import financialReport_Aug_2023 from '../../files/Financial/2023/01_2023_TEST.txt';
import financialReport_Sep_2023 from '../../files/Financial/2023/01_2023_TEST.txt';

import minutesReport_Mar_2023 from '../../files/Minutes/2023/02_2023_TEST.txt';
import minutesReport_Apr_2023 from '../../files/Minutes/2023/02_2023_TEST.txt';
import minutesReport_May_2023 from '../../files/Minutes/2023/02_2023_TEST.txt';
import minutesReport_Jun_2023 from '../../files/Minutes/2023/02_2023_TEST.txt';
import minutesReport_Jul_2023 from '../../files/Minutes/2023/02_2023_TEST.txt';
import minutesReport_Aug_2023 from '../../files/Minutes/2023/02_2023_TEST.txt';
import minutesReport_Sep_2023 from '../../files/Minutes/2023/02_2023_TEST.txt';
import minutesReport_Oct_2023 from '../../files/Minutes/2023/02_2023_TEST.txt';

const financial_2023 = [
  {
    id: "Jan",
    month: "Jan",
    year: 2023,
    file: financialReport_Jan_2023
  },
  {
    id: "Feb",
    month: "Feb",
    year: 2023,
    file: financialReport_Feb_2023,
  },
  {
    id: "Mar",
    month: "Mar",
    year: 2023,
    file: financialReport_Mar_2023,
  },
  {
    id: "Apr",
    month: "Apr",
    year: 2023,
    file: financialReport_Apr_2023,
  },
  {
    id: "May",
    month: "May",
    year: 2023,
    file: financialReport_May_2023,
  },
  {
    id: "Jun",
    month: "Jun",
    year: 2023,
    file: financialReport_Jun_2023,
  },
  {
    id: "Jul",
    month: "Jul",
    year: 2023,
    file: financialReport_Jul_2023,
  },
  {
    id: "Aug",
    month: "Aug",
    year: 2023,
    file: financialReport_Aug_2023,
  },
  {
    id: "Sep",
    month: "Sep",
    year: 2023,
    file: financialReport_Sep_2023,
  },
];

const minutes_2023 = [
  {
    id: "Mar",
    month: "Mar",
    year: 2023,
    file: minutesReport_Mar_2023,
  },
  {
    id: "Apr",
    month: "Apr",
    year: 2023,
    file: minutesReport_Apr_2023,
  },
  {
    id: "May",
    month: "May",
    year: 2023,
    file: minutesReport_May_2023,
  },
  {
    id: "Jun",
    month: "Jun",
    year: 2023,
    file: minutesReport_Jun_2023,
  },
  {
    id: "Jul",
    month: "Jul",
    year: 2023,
    file: minutesReport_Jul_2023,
  },
  {
    id: "Aug",
    month: "Aug",
    year: 2023,
    file: minutesReport_Aug_2023,
  },
  {
    id: "Sep",
    month: "Sep",
    year: 2023,
    file: minutesReport_Sep_2023,
  },
  {
    id: "Oct",
    month: "Oct",
    year: 2023,
    file: minutesReport_Oct_2023,
  },
];

const Files = () => {
  return (
    <Fragment>
      <Card className={classes.Files}>
        <h1>2023 Financial Reports</h1>
        <FileList files={financial_2023} />
      </Card>

      <Card className={classes.Files}>
        <h1>2023 Minutes</h1>
        <FileList files={minutes_2023} />
      </Card>
    </Fragment>
  );
};

export default Files;
