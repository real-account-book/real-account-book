import conn from "../db"
import { Request,Response } from "express"
import { StatusCodes } from "http-status-codes"

export const addMinus = (req : Request,res : Response) => {
  let { minus, category_id, title, content, uploaded_at } = req.body

  let query= `INSERT  INTO  Asset_minus (minus, category_id, title, content, uploaded_at)
    VALUES (?, ?, ?, ?, ?);`;
  let values = [ minus, category_id, title, content, uploaded_at ];
  conn.query(query, values, (_err, result) => {
    res.status(StatusCodes.CREATED).json(result);
  })
};

export const deleteMinus = (req : Request,res : Response) => {
  const minus_id = req.params.minusId;
  console.log(minus_id)
  
  let query = `DELETE FROM Asset_minus WHERE id = ?`;
  conn.query(query, minus_id, (_err, result) => {
    return res.status(StatusCodes.OK).json(result)
  })
};

export const editMinus = (req : Request,res : Response) => {
  let query = ''
  conn.query(query, (_err, result) => {
      return res.status(StatusCodes.OK).json(result)
  })
};