/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

https://leetcode.com/problems/group-anagrams/
 */

const groupAnagrams = (strs) => {
    const groups = {}

    for(const str of strs){
        const sorted = str.split('').sort().join('')
        if(!groups[sorted]){
            groups[sorted] = [str]
        }else{
            groups[sorted].push(str)
        }
    }

    return Object.values(groups)
};