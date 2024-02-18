local Hamming = {}

function Hamming.compute(a, b)
  if #a ~= #b then return -1 end

  local hamming_dist = 0;
  for i = 1, #a do
    if a:sub(i, i) ~= b:sub(i, i) then
      hamming_dist = hamming_dist + 1
    end
  end

  return hamming_dist
end

return Hamming
