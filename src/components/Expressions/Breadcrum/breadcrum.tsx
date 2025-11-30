"use client";
import React from 'react'
import { Link } from 'react-router-dom'

const breadcru = () => {
    return (
        <div className="inline-flex flex-wrap items-center gap-2 text-xs font-semibold bg-white px-4 py-1.5 rounded-full shadow-sm border border-slate-100 text-slate-500 mb-6">
            <a href="#" className="hover:text-blue-500 transition-colors">
                Home
            </a>
            <span className="text-slate-300">/</span>
            <Link to="/Expressions" className="hover:text-blue-500 transition-colors">
                Expressions
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-indigo-600">Phrasal Verbs</span>
        </div>
    )
}
export default breadcru