function [fixedString] = htmlEntities(matFile, myString, opt)
%HTMLENTITIES encodes / decodes html entitites in user string
%  Reading in the predefined entities.mat file which contains the
%  characters with corresponding html entity. User supplies string
%  and option to decode (0) or encode (1)
    strArray = string(table2cell(importdata(matFile)));
    if ~exist('opt','var')
        opt = 0; %default decoding
    end
    
    if (opt == 0)
        fixedString = replace(myString,strArray(:,2),strArray(:,1));
    elseif (opt == 1)
        fixedString = replace(myString,strArray(:,1),strArray(:,2));
    else
        error(['*`' opt '` is not a valid option. Please input integer value 0 for decoding or 1 for encoding.']);
    end
    
end

