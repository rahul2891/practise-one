import { Component } from '@angular/core';
import { Candidate } from '../models/candidate';


@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent {

candidateData: Candidate[] =[ 
    {
      "id": 11,
      "cname": "Ash",
      "department": "Finance",
      "joining_date": "8/10/2016"
  },
  {"id": 12,"cname": "John","department": "HR","joining_date": "18/1/2011"},
  { "id": 13, "cname": "Zuri", "department": "Operations", "joining_date": "28/11/2019"},
  {"id": 14,  "cname": "Vish",  "department": "Development",   "joining_date": "7/7/2017"},
  { "id": 15, "cname": "Barry",  "department": "Operations", "joining_date": "19/8/2014"},
  {"id": 16,"cname": "Ady",  "department": "Finance",  "joining_date": "5/10/2014"}, 
  { "id": 17,"cname": "Gare","department": "Development",  "joining_date": "6/4/2014"},
  { "id": 18,  "cname": "Hola",  "department": "Development",  "joining_date": "8/12/2010"}, 
  {"id": 19,  "cname": "Ola",  "department": "HR",  "joining_date": "7/5/2011"},
  { "id": 20,  "cname": "Kim",  "department": "Finance",  "joining_date": "20/10/2010"}
  
  ];

  newItem: any = {};
  nameSearch: string = ''

  constructor() { 
  }

  addItems() {
    this.candidateData.push(this.newItem);
    console.log(this.candidateData);
    this.newItem = {};
  }
}

