import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { Controller } from "react-hook-form";

export default function SelectFlagInput({ control }) {
  const [selected, setSelected] = useState("SA"); // Default selected country (Saudi Arabia)
  console.log("🚀 ~ SelectFlagInput ~ selected:", selected);
  const onSelect = (code) => {
    console.log("🚀 ~ onSelect ~ code:", code);
  };
  const countryCallingCodes = {
    SA: "966",
    GB: "44",
    IE: "353",
    IT: "39",
    NL: "31",
    SE: "46",
  };

  return (
    <div className="App">
      <Controller
        name="phone_code"
        control={control}
        defaultValue={countryCallingCodes[selected]}
        render={({ field: { onChange, value } }) => (
          <ReactFlagsSelect
            selected={selected}
            onSelect={(code) => {
              setSelected(code); // Update local state
              onChange(countryCallingCodes[code]); // Update react-hook-form value
            }}
            countries={["SA", "GB", "IE", "IT", "NL", "SE"]}
            showSelectedLabel={false}
            showOptionLabel={false}
            placeholder="Select a country"
            className="h-[40px]"
            style={{
              height: "60px",
            }}
          />
        )}
      />

      {/* <ReactFlagsSelect
        className="h-[40px]"
        selected={selected}
        onSelect={onSelect}
        countries={["SA", "GB", "IE", "IT", "NL", "SE"]} // Customize the country list
        showSelectedLabel={false} // Hides the label next to the selected flag
        showOptionLabel={false} // Hides labels in dropdown options
        placeholder="Select a country" // Optional placeholder
        style={{
          height: "60px", // Adjust the height as needed
        }}
      /> */}

      <br />

      <div className="react-tel-input flag us"></div>
    </div>
  );
}
