module.exports = {
        
    manifest: `{
        "account_code_blocks": 
        [
        {
            "code": "_SAMPLE_MANIFEST",
            "name": "sample_manifest",
            "content": "<script> console.log('**SAMPLE MANIFEST OUTPUT TEST**'); console.log('Textbox Example: {{textbox_example}}'); console.log('Number Example: {{number_example}}'); console.log('Toggle Example: {{toggle_example}}'); console.log('Debug Example: {{debug_mode}}'); </script>",
            "placement_code": "BODY_BOTTOM",
            "description": "This is a sample manifest outputting fields to the console"
        }
        ],
    
        "config_fields": 
        [
        {
            "code": "_TEXTBOX_EXAMPLE",
            "name": "textbox_example",   
            "label": "textbox example",
            "ordinal": 0,
            "category": "integrations",
            "control_type": "textbox",
            "scopes": ["hub"],
            "description": "Sample textbox input",
            "control_props":
            {
                "placeholder": "Example textbox placeholder"
            }
        },
        {
            "code": "_NUMBER_EXAMPLE",
            "name": "number_example",   
            "label": "number example",
            "ordinal": 1,
            "category": "integrations",
            "control_type": "number",
            "scopes": ["hub"],
            "description": "Sample number input"
        },
        {
            "code": "_TOGGLE_EXAMPLE",
            "name": "toggle_example",   
            "label": "toggle example",
            "ordinal": 2,
            "category": "integrations",
            "control_type": "toggle",
            "scopes": ["hub"],
            "description": "Sample toggle input"
        },
        {
            "code": "_DEBUG_MODE",
            "name": "debug_mode",   
            "label": "Debug Mode for Developers",
            "ordinal": 3,
            "category": "integrations",
            "control_type": "toggle",
            "scopes": ["hub"],
            "description": "For developer debugging purposes, when enabled check the console logs for detailed info on the operation of this app." 
        }
        ]
    }`,
    
    themesCheck: `var themeCheck = document.body.dataset.domainTheme;
    
    if (themeCheck === undefined) {
    
        //Input Tv1 code
        console.log("Tv1 Hub");
    
    } else {
    
        //Input Tv2 code
        console.log("Tv2 Hub");
    
    }`
    }