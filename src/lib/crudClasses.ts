type ClassValue = string | null | undefined | false;

export const joinClasses = (...classes: ClassValue[]) =>
  classes.filter(Boolean).join(" ");

export const crudClasses = {
  crudPage: {
    root: "crud_page",
    deleteContent: "crud_page_delete_content",
  },
  button: {
    root: "crud_button",
  },
  tabs: {
    root: "crud_tabs",
    tab: "crud_tabs_tab",
    count: "crud_tabs_count",
  },
  chip: {
    root: "crud_chip",
  },
  spinner: {
    root: "crud_spinner",
  },
  modal: {
    root: "crud_modal",
    overlay: "crud_modal_overlay",
    container: "crud_modal_container",
    header: "crud_modal_header",
    title: "crud_modal_title",
    closeButton: "crud_modal_close_button",
    body: "crud_modal_body",
    footer: "crud_modal_footer",
    actionButton: "crud_modal_action_button",
    loadingIndicator: "crud_modal_loading_indicator",
  },
  table: {
    root: "crud_table",
    toolbar: "crud_table_toolbar",
    searchField: "crud_table_search_field",
    searchInput: "crud_table_search_input",
    container: "crud_table_container",
    element: "crud_table_element",
    head: "crud_table_head",
    headRow: "crud_table_head_row",
    headCell: "crud_table_head_cell",
    body: "crud_table_body",
    row: "crud_table_row",
    cell: "crud_table_cell",
    noData: "crud_table_no_data",
    actionButton: "crud_table_action_button",
    menu: "crud_table_menu",
    menuItem: "crud_table_menu_item",
    pagination: "crud_table_pagination",
  },
  tableSkeleton: {
    root: "crud_table_skeleton",
    table: "crud_table_skeleton_table",
  },
  sortDropdown: {
    root: "crud_sort_dropdown",
    trigger: "crud_sort_dropdown_trigger",
    menu: "crud_sort_dropdown_menu",
    item: "crud_sort_dropdown_item",
  },
  imagePreview: {
    root: "crud_image_preview",
    container: "crud_image_preview_container",
    image: "crud_image_preview_image",
  },
  filterDrawer: {
    overlay: "crud_filter_overlay",
    panel: "crud_filter_panel",
    header: "crud_filter_header",
    body: "crud_filter_body",
    footer: "crud_filter_footer",
  },
  form: {
    root: "crud_form",
    loading: "crud_form_loading",
  },
  field: {
    wrapper: "crud_field_wrapper",
    label: "crud_field_label",
    input: "crud_field_input",
    error: "crud_field_error",
  },
  mediaPicker: {
    image: "crud_media_image_picker",
    multiImage: "crud_media_multi_image_picker",
    audio: "crud_media_audio_picker",
    video: "crud_media_video_picker",
    dropzone: "crud_media_dropzone",
    cropModal: "crud_media_crop_modal",
  },
  details: {
    root: "crud_details",
    container: "crud_details_container",
    row: "crud_details_row",
  },
} as const;
