type ClassValue = string | null | undefined | false;
export declare const joinClasses: (...classes: ClassValue[]) => string;
export declare const crudClasses: {
    readonly crudPage: {
        readonly root: "crud_page";
        readonly deleteContent: "crud_page_delete_content";
    };
    readonly button: {
        readonly root: "crud_button";
    };
    readonly chip: {
        readonly root: "crud_chip";
    };
    readonly spinner: {
        readonly root: "crud_spinner";
    };
    readonly modal: {
        readonly root: "crud_modal";
        readonly overlay: "crud_modal_overlay";
        readonly container: "crud_modal_container";
        readonly header: "crud_modal_header";
        readonly title: "crud_modal_title";
        readonly closeButton: "crud_modal_close_button";
        readonly body: "crud_modal_body";
        readonly footer: "crud_modal_footer";
        readonly actionButton: "crud_modal_action_button";
        readonly loadingIndicator: "crud_modal_loading_indicator";
    };
    readonly table: {
        readonly root: "crud_table";
        readonly toolbar: "crud_table_toolbar";
        readonly searchField: "crud_table_search_field";
        readonly searchInput: "crud_table_search_input";
        readonly container: "crud_table_container";
        readonly element: "crud_table_element";
        readonly head: "crud_table_head";
        readonly headRow: "crud_table_head_row";
        readonly headCell: "crud_table_head_cell";
        readonly body: "crud_table_body";
        readonly row: "crud_table_row";
        readonly cell: "crud_table_cell";
        readonly noData: "crud_table_no_data";
        readonly actionButton: "crud_table_action_button";
        readonly menu: "crud_table_menu";
        readonly menuItem: "crud_table_menu_item";
        readonly pagination: "crud_table_pagination";
    };
    readonly tableSkeleton: {
        readonly root: "crud_table_skeleton";
        readonly table: "crud_table_skeleton_table";
    };
    readonly sortDropdown: {
        readonly root: "crud_sort_dropdown";
        readonly trigger: "crud_sort_dropdown_trigger";
        readonly menu: "crud_sort_dropdown_menu";
        readonly item: "crud_sort_dropdown_item";
    };
    readonly imagePreview: {
        readonly root: "crud_image_preview";
        readonly container: "crud_image_preview_container";
        readonly image: "crud_image_preview_image";
    };
    readonly filterDrawer: {
        readonly overlay: "crud_filter_overlay";
        readonly panel: "crud_filter_panel";
        readonly header: "crud_filter_header";
        readonly body: "crud_filter_body";
        readonly footer: "crud_filter_footer";
    };
    readonly form: {
        readonly root: "crud_form";
        readonly loading: "crud_form_loading";
    };
    readonly field: {
        readonly wrapper: "crud_field_wrapper";
        readonly label: "crud_field_label";
        readonly input: "crud_field_input";
        readonly error: "crud_field_error";
    };
    readonly mediaPicker: {
        readonly image: "crud_media_image_picker";
        readonly multiImage: "crud_media_multi_image_picker";
        readonly audio: "crud_media_audio_picker";
        readonly video: "crud_media_video_picker";
        readonly dropzone: "crud_media_dropzone";
        readonly cropModal: "crud_media_crop_modal";
    };
    readonly details: {
        readonly root: "crud_details";
        readonly container: "crud_details_container";
        readonly row: "crud_details_row";
    };
};
export {};
